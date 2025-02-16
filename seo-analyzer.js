async function analyzeSEO() {
    const url = document.getElementById("websiteUrl").value;
    if (!url) {
        alert("Please enter a website URL");
        return;
    }

    document.getElementById("result").innerHTML = "Analyzing...";

    try {
        const response = await fetch(`https://api.seoapi.io/analyze?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h3>SEO Analysis Report</h3>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Keywords:</strong> ${data.keywords.join(", ")}</p>
            <p><strong>Backlinks:</strong> ${data.backlinks}</p>
            <p><strong>Errors:</strong> ${data.errors}</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching SEO data.";
    }
}
