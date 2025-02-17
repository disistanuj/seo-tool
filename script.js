function loadTool(toolName) {
    document.getElementById('tool-frame').src = 'tools/' + toolName + '.html';
    document.getElementById('tool-frame').style.display = 'block';
}
