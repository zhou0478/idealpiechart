
<!DOCTYPE html>
<html>
<head>
    <title>Self-Worth Distribution</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary: #ffde59;
            --secondary: #a0cc64;
            --dark: #2f4858;
            --light: #fef0ca;
            --accent-1: #4eb07a;
            --accent-2: #008f85;
            --accent-3: #146b79;
            --accent-4: #7d9cc0;
        }

        body { 
            font-family: 'DM Sans', sans-serif;
            margin: 0;
            padding: 0;
            background: var(--light);
            color: var(--dark);
            min-height: 100vh;
            letter-spacing: -0.03em;
        }

        .container { 
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            box-sizing: border-box;
        }

        h1 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 2rem;
            color: var(--dark);
            font-weight: 700;
        }

        .card {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            box-shadow: 0 10px 20px rgba(77, 60, 58, 0.1);
            margin-bottom: 2rem;
            transition: transform 0.3s ease;
            border: 1px solid var(--primary);
        }

        h3 {
            font-weight: 500;
            color: var(--dark);
            margin-top: 0;
        }

        .instructions {
            background: white;
            padding: 1.5rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            border-left: 4px solid var(--secondary);
        }

        .instructions p {
            margin: 0.7em 0;
            line-height: 1.5;
        }

        .template-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }

        .template-area {
            background: var(--light);
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid var(--primary);
            color: var(--dark);
            font-weight: 500;
        }

        .template-area:hover {
            background: var(--primary);
            transform: translateY(-2px);
        }

        .entry-row {
            display: grid;
            grid-template-columns: 1fr auto auto;
            gap: 1rem;
            margin: 1rem 0;
            align-items: center;
        }

        input {
            padding: 0.8rem 1rem;
            border: 2px solid var(--primary);
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            width: 100%;
            box-sizing: border-box;
            color: var(--dark);
            font-family: 'DM Sans', sans-serif;
        }

        input:focus {
            border-color: var(--secondary);
            outline: none;
            box-shadow: 0 0 0 3px rgba(150, 126, 118, 0.1);
        }

        input[type="number"] {
            width: 80px;
        }

        button {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 8px;
            background: var(--secondary);
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
        }

        button:hover {
            background: var(--dark);
            transform: translateY(-2px);
        }

        .remove-btn {
            background: var(--accent-4);
            padding: 0.8rem;
        }

        .action-buttons {
            display: flex;
            gap: 1rem;
            margin: 2rem 0;
        }

        .action-buttons button {
            flex: 1;
        }

        .download-btn {
            background: var(--accent-3);
        }

        .error {
            color: var(--dark);
            margin: 1rem 0;
            padding: 1rem;
            border-radius: 8px;
            background: var(--accent-2);
            display: none;
            font-weight: 500;
        }

        .error.visible {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        #piechart {
            width: 100% !important;
            height: 400px !important;
            margin-top: 2rem;
            transition: all 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
            .container {
                padding: 1rem;
            }

            .entry-row {
                grid-template-columns: 1fr auto;
            }

            input[type="number"] {
                width: 60px;
            }

            .template-grid {
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            }

            h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Self-Worth Distribution</h1>
        
        <div class="card instructions">
            <h3>How to Complete This Exercise</h3>
            <p>1. Reflect on the different areas of your life that contribute to your sense of self-worth</p>
            <p>2. Select from the common life areas below or add your own custom areas</p>
            <p>3. Assign percentages to each area (total must equal 100%)</p>
            <p>4. Click "Update Chart" to visualize your distribution</p>
        </div>

        <div class="card">
            <h3>Common Life Areas</h3>
            <div class="template-grid">
                <div class="template-area" onclick="addTemplate('Study or academic achievement')">
                    Study or academic achievement
                </div>
                <div class="template-area" onclick="addTemplate('Appearance')">
                    Appearance
                </div>
                <div class="template-area" onclick="addTemplate('What I eat in a day')">
                    What I eat in a day 
                </div>
                <div class="template-area" onclick="addTemplate('What others think of me')">
                    What others think of me
                </div>
                <div class="template-area" onclick="addTemplate('Dating')">
                    Dating 
                </div>
                <div class="template-area" onclick="addTemplate('Sports')">
                    Sports
                </div>
                <div class="template-area" onclick="addTemplate('Hobbies')">
                    Hobbies
                </div>
                <div class="template-area" onclick="addTemplate('Exercise')">
                    Exercise
                </div>
            </div>
        </div>

        <div class="card">
            <div id="entries"></div>
            <div class="action-buttons">
                <button onclick="addEntry()">
                    <i class="fas fa-plus"></i> Add Area
                </button>
                <button onclick="updateChart()">
                    <i class="fas fa-chart-pie"></i> Update Chart
                </button>
            </div>
            <div id="error" class="error"></div>
        </div>

        <div class="card">
            <div id="piechart"></div>
            <div class="action-buttons">
                <button onclick="downloadChart()" class="download-btn">
                    <i class="fas fa-download"></i> Download Chart
                </button>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script>
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(initChart);

        let entries = [];
        
        function initChart() {
            addEntry();
            drawChart([]);
        }

        function addTemplate(area) {
            const emptyEntry = document.querySelector('input[type="text"][value=""]');
            if (emptyEntry) {
                emptyEntry.value = area;
            } else {
                addEntry();
                const lastEntry = document.querySelector('#entries div:last-child input[type="text"]');
                lastEntry.value = area;
            }
        }

        function addEntry() {
            const entriesDiv = document.getElementById('entries');
            const newRow = document.createElement('div');
            newRow.className = 'entry-row';
            newRow.innerHTML = `
                <input type="text" placeholder="Enter life area">
                <input type="number" placeholder="%" min="0" max="100">
                <button class="remove-btn" onclick="removeEntry(this)">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            entriesDiv.appendChild(newRow);
        }

        function removeEntry(button) {
            if (document.getElementsByClassName('entry-row').length > 1) {
                button.parentElement.remove();
            }
        }

        function updateChart() {
            const rows = document.getElementsByClassName('entry-row');
            let data = [];
            let total = 0;

            for (let row of rows) {
                const area = row.children[0].value;
                const percentage = parseFloat(row.children[1].value) || 0;
                
                if (area && percentage) {
                    data.push([area, percentage]);
                    total += percentage;
                }
            }

            const error = document.getElementById('error');
            if (total !== 100) {
                error.textContent = `Total must equal 100%. Current total: ${total}%`;
                error.classList.add('visible');
                return;
            }
            error.classList.remove('visible');

            drawChart(data);
        }

        function drawChart(data) {
            const chartData = google.visualization.arrayToDataTable([
                ['Area', 'Percentage'],
                ...data
            ]);

            const options = {
                pieHole: 0.4,
                colors: ['#bfdbdd', '#fff6a5', '#9caf88', '#7d9cc0', '#c7b8b5', '#967e76'],
                backgroundColor: 'transparent',
                chartArea: {
                    width: '90%',
                    height: '80%'
                },
                legend: {
                    position: 'right',
                    alignment: 'center',
                    textStyle: {
                        color: '#4d3c3a',
                        fontSize: 14,
                        fontName: 'DM Sans'
                    }
                },
                tooltip: {
                    text: 'percentage'
                },
                animation: {
                    startup: true,
                    duration: 1000,
                    easing: 'out'
                }
            };

            const chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(chartData, options);
            window.currentChart = chart;
        }

        function downloadChart() {
            const chartDiv = document.getElementById('piechart');
            
            // Create a wrapper div for the chart and metadata
            const wrapper = document.createElement('div');
            wrapper.style.background = 'white';
            wrapper.style.padding = '20px';
            wrapper.style.borderRadius = '10px';
            wrapper.style.fontFamily = 'DM Sans, sans-serif';
            
            // Add title
            const title = document.createElement('h2');
            title.textContent = 'My Self-Worth Distribution';
            title.style.textAlign = 'center';
            title.style.color = '#4d3c3a';
            title.style.marginBottom = '20px';
            wrapper.appendChild(title);
            
            // Clone the chart
            const chartClone = chartDiv.cloneNode(true);
            wrapper.appendChild(chartClone);
            
            // Add date
            const date = document.createElement('p');
            date.textContent = 'Created: ' + new Date().toLocaleDateString();
            date.style.textAlign = 'center';
            date.style.color = '#967e76';
            date.style.marginTop = '20px';
            wrapper.appendChild(date);
            
            // Position wrapper off-screen
            wrapper.style.position = 'fixed';
            wrapper.style.left = '-9999px';
            wrapper.style.top = 0;
            document.body.appendChild(wrapper);
            
            // Use html2canvas to capture the wrapper
            html2canvas(wrapper, {
                scale: 2,
                backgroundColor: 'white',
                logging: false
            }).then(canvas => {
                // Create download link
                const link = document.createElement('a');
                link.download = 'self-worth-distribution.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
                
                // Cleanup
                document.body.removeChild(wrapper);
            });
        }
    </script>
</body>
</html>
