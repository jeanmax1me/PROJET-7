

function selectItem(selectedElement) {
    // Check if the selected element already has the 'selected' class
    if (!selectedElement.classList.contains("selected")) {
        // Check if the SVG already exists in the dropdown
        var svgDropdown = selectedElement.querySelector('svg');
        if (!svgDropdown) {
            const originalOnClick = selectedElement.onclick;
            // Create a clone of the selected item
            var selectedItemClone = selectedElement.cloneNode(true);
            selectedItemClone.classList.add("selected-item");
            // Add click event listener to the selectedElement with 'selected' class
            selectedElement.classList.add("selected");
            selectedElement.style.height = "37px";
            selectedElement.onclick = null;
            // Add click event listener to the selectedItemClone
            selectedElement.addEventListener('click', function () {
                removeSelectedItem(selectedElement, selectedItemClone, originalOnClick);
            });
            selectedItemClone.addEventListener('click', function () {
                removeSelectedItem(selectedElement, selectedItemClone, originalOnClick);
            });


            // ------------------SVG IN THE DROPDOWN------------------------   

            var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svgElement.setAttribute("width", "17");
            svgElement.setAttribute("height", "17");
            svgElement.setAttribute("viewBox", "0 0 17 17");
            var circleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circleElement.setAttribute("cx", "8.5");
            circleElement.setAttribute("cy", "8.5");
            circleElement.setAttribute("r", "8.5");
            circleElement.setAttribute("fill", "black");
            var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathElement.setAttribute("d", "M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11");
            pathElement.setAttribute("stroke", "#FFD15B");
            pathElement.setAttribute("stroke-linecap", "round");
            pathElement.setAttribute("stroke-linejoin", "round");
            svgElement.appendChild(circleElement);
            svgElement.appendChild(pathElement);
            selectedElement.appendChild(svgElement);

            // ----------------------- SVG IN THE FILTERS SELECTED CONTAINER --------------------------------
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
            svgElement.appendChild(pathElement);
            selectedItemClone.appendChild(svgElement);
            // Append the cloned item to the .filters-selected container
            document.getElementById("selectedContainer").appendChild(selectedItemClone);
        }
    }
}

function removeSelectedItem(selectedElement, selectedItemClone, originalOnClick) {
    // Remove the 'selected' class from the original item in the dropdown
    selectedElement.classList.remove("selected");
    selectedElement.style.height = "";
  
    // Remove the associated SVG from the selectedElement
    var svgDropdown = selectedElement.querySelector('svg');
    if (svgDropdown) {
      svgDropdown.remove();
    }
  
    // Check if the clone still exists before attempting to remove it
    if (document.body.contains(selectedItemClone)) {
      // Delayed removal of the clone
      setTimeout(function () {
        // Remove the associated SVG from the selectedItemClone
        var svgClone = selectedItemClone.querySelector('svg');
        if (svgClone) {
          svgClone.remove();
        }
  
        // Remove the selectedItemClone
        selectedItemClone.parentNode.removeChild(selectedItemClone);
      }, 0);
    } else {
      // The clone has already been removed, so reset the onclick handler immediately
      selectedElement.onclick = originalOnClick;
    }
  }