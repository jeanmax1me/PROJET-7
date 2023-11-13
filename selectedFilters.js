function selectItem(selectedElement) {
    // Check if the selected element already has the 'selected' class
    if (!selectedElement.classList.contains("selected")) {
        // Create a clone of the selected item (if needed)
        var selectedItemClone = selectedElement.cloneNode(true);
        selectedItemClone.classList.add("selected-item");
        // Add the 'selected' class to the original item in the dropdown
        selectedElement.classList.add("selected");
        selectedElement.style.height = "37px";
        // Create an SVG element
        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgElement.setAttribute("width", "17");
        svgElement.setAttribute("height", "17");
        svgElement.setAttribute("viewBox", "0 0 17 17");

        // Create a circle element within the SVG
        var circleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circleElement.setAttribute("cx", "8.5");
        circleElement.setAttribute("cy", "8.5");
        circleElement.setAttribute("r", "8.5");
        circleElement.setAttribute("fill", "black");

        // Create a path element within the SVG
        var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement.setAttribute("d", "M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11");
        pathElement.setAttribute("stroke", "#FFD15B");
        pathElement.setAttribute("stroke-linecap", "round");
        pathElement.setAttribute("stroke-linejoin", "round");

        // Append the circle and path elements to the SVG element
        svgElement.appendChild(circleElement);
        svgElement.appendChild(pathElement);

        // Append the SVG element to the selected <p> element
        selectedElement.appendChild(svgElement);

        // Create the SVG element
        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgElement.setAttribute("width", "14");
        svgElement.setAttribute("height", "13");
        svgElement.setAttribute("viewBox", "0 0 14 13");
        svgElement.setAttribute("fill", "none");

        var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement.setAttribute("d", "M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5");
        pathElement.setAttribute("stroke", "#1B1B1B");
        pathElement.setAttribute("stroke-width", "2.16667");
        pathElement.setAttribute("stroke-linecap", "round");
        pathElement.setAttribute("stroke-linejoin", "round");

        // Append the path element to the SVG element
        svgElement.appendChild(pathElement);

        // Append the SVG element to the selected item clone
        selectedItemClone.appendChild(svgElement);

        // Append the cloned item to the .filters-selected container
        document.getElementById("selectedContainer").appendChild(selectedItemClone);
    }
}
