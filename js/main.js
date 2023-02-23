const ctx = document.getElementByID("Capacidades").getContext("2d");
const labels = [
    "Evaluación Psicológica",
    "Tecnología",
];

const data = {
    labels,
    datasets: [{
        data:[10,9],
        label: "Mis capacidades",
    },
],
};
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive:true,
    },
};

const Capacidades = new Chart(ctx, {config});