function selectItem(selectedElement) {
    const filterValue = selectedElement.textContent;
    console.log(`Selected filter value: ${filterValue}`);

    if (!selectedFilters.includes(filterValue)) {
        // If the filter is not present, add it and update the search
        selectedFilters.push(filterValue);
        console.log(`Selected filters array: ${selectedFilters}`);
        searchByFilters(selectedFilters);
    } else {
        // If the filter is already present, remove it
        const originalOnClick = selectedElement.onclick;
        const selectedItemClone = document.querySelector(`.selected-item[data-filter="${filterValue}"]`);

        if (selectedItemClone) {
            removeSelectedItem(selectedElement, selectedItemClone, originalOnClick);
        }
    }
}


function updateSelectedItemLayout(selectedElement) {
    const filterValue = selectedElement.textContent.trim();
    const svgDropdown = selectedElement.querySelector('svg');

    if (!svgDropdown) {
        const originalOnClick = selectedElement.onclick;
        const existingClone = document.querySelector(`.selected-item[data-filter="${filterValue}"]`);

        if (!existingClone) {
            selectedItemClone = document.createElement('p');
            selectedItemClone.textContent = filterValue;
            selectedItemClone.classList.add("selected-item");
            selectedItemClone.setAttribute('data-filter', filterValue);
            selectedElement.classList.add("selected");
            selectedElement.style.height = "37px";
            selectedElement.onclick = null;
            selectedItemClone.onclick = null;
            selectedElement.addEventListener('click', function () {
                removeSelectedItem(selectedElement, selectedItemClone, originalOnClick);
            });
            selectedItemClone.addEventListener('click', function () {
                removeSelectedItem(selectedElement, selectedItemClone, originalOnClick);
            });
            selectedContainer.appendChild(selectedItemClone);
            createDropdownSVG();
            createCloneSVG();
        }
    }



    // ------------------SVG IN THE DROPDOWN------------------------   
    function createDropdownSVG() {
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
    }
    function createCloneSVG() {
        if (!selectedItemClone) {
            console.error("selectedItemClone is undefined");
        }
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

    }
}

function removeSelectedItem(selectedElement, selectedItemClone, originalOnClick) {
    const filterValue = selectedElement.textContent;
    // Remove the filter value from the array
    const index = selectedFilters.indexOf(filterValue);
    if (index !== -1) {
        selectedFilters.splice(index, 1);
    }
    if (selectedFilters.length === 0) {
        searchInput.value = '';
        resetPageState(); // reset dropdowns and cards to their original state
    }
    selectedElement.classList.remove("selected");
    selectedElement.style.height = "";
    selectedElement.querySelector('svg')?.remove();

    if (document.body.contains(selectedItemClone)) {
        setTimeout(function () {    //timeout to wait for the DOM to update 
            selectedItemClone.querySelector('svg')?.remove();
            selectedItemClone.remove();
        }, 0);
    } else {
        selectedElement.onclick = originalOnClick;
    }
}

function resetPageState() {
    updateDropdownOptions(1, allIngredients, 'ingredient');
    updateDropdownOptions(2, allAppliances, 'appliance');
    updateDropdownOptions(3, allUstensils, 'ustensil');
    populateCards(recipes);
    updateRecipeCount();
}