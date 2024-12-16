document.addEventListener('DOMContentLoaded', () => {
    // Network Traffic Chart
    const trafficCtx = document.getElementById('traffic-chart').getContext('2d');
    const trafficChart = new Chart(trafficCtx, {
        type: 'line',
        data: {
            labels: ['0s', '5s', '10s', '15s', '20s', '25s'],
            datasets: [{
                label: 'Network Traffic (Mbps)',
                data: [0, 5, 12, 8, 20, 15],
                borderColor: '#0073e6',
                backgroundColor: 'rgba(0, 115, 230, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Mobility Visualization
    const mobilityCtx = document.getElementById('mobility-canvas').getContext('2d');
    let mobilityX = 0;
    function drawMobility() {
        mobilityCtx.clearRect(0, 0, mobilityCtx.canvas.width, mobilityCtx.canvas.height);
        mobilityCtx.fillStyle = '#0073e6';
        mobilityCtx.fillRect(mobilityX, 50, 20, 20);
        mobilityX += 5;
        if (mobilityX > mobilityCtx.canvas.width) {
            mobilityX = 0;
        }
        requestAnimationFrame(drawMobility);
    }
    drawMobility();

    // QoS Configuration
    const qosSelect = document.getElementById('qos-select');
    const applyQosButton = document.getElementById('apply-qos');
    const qosResult = document.getElementById('qos-result');

    applyQosButton.addEventListener('click', () => {
        const selectedQoS = qosSelect.value;
        qosResult.textContent = `Applied QoS Model: ${selectedQoS}`;
    });
});
