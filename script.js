const insert = () => {
    let type = document.querySelector("#type").value;
    let label = document.querySelector("#label").value;
    let placeholder = document.querySelector("#placeholder").value;
  
    switch (type) {
      case "text":
        appendText(label, placeholder);
        break;
      case "radio":
        appendRadio(label, placeholder);
        break;
      case "button":
        appendButton(label);
        break;
    }
  };
  
  const appendText = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("div");
    el.setAttribute("class", "input-group mb-1");
  
    let inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("class", "form-control");
    inputEl.setAttribute("placeholder", placeholder);
    inputEl.setAttribute("aria-label", label);
  
    let btnEl = document.createElement("button");
    btnEl.setAttribute("type", "button");
    btnEl.setAttribute("class", "btn btn-danger ms-2");
    btnEl.innerHTML = "Delete";
  
    btnEl.onclick = () => {
      inputGroupContainer.remove();
    };
  
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "input-group-append");
    buttonContainer.appendChild(btnEl);
  
    let inputGroupContainer = document.createElement("div");
    inputGroupContainer.setAttribute("class", "input-group mb-1");
    inputGroupContainer.appendChild(inputEl);
    inputGroupContainer.appendChild(buttonContainer);
  
    document.querySelector("#elements").append(inputGroupContainer);
  };
  
  const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let container = document.createElement("div");
    container.setAttribute("class", "form-check d-flex align-items-center");
  
    let el = document.createElement("input");
    el.setAttribute("type", "radio");
    el.setAttribute("name", "radio-group");
  
    let labelEl = document.createElement("label");
    labelEl.innerHTML = label;
  
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger ms-2");
    deleteBtn.onclick = () => {
      container.remove();
    };
  
    container.appendChild(el);
    container.appendChild(labelEl);
    container.appendChild(deleteBtn);
  
    document.querySelector("#elements").appendChild(container);
  };
  
  
  const appendButton = (label = "No label") => {
    let el = document.createElement("button");
    el.setAttribute("type", "button");
    el.setAttribute("class", "btn btn-primary mt-1 btn-sm");
    el.style.width = "200px";
    el.innerHTML = label;
  
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger ms-2");
    deleteBtn.onclick = () => {
      el.remove();
      deleteBtn.remove();
    };
  
    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "input-group-append");
    buttonContainer.appendChild(deleteBtn);
  
    let divEl = document.createElement("div");
    divEl.setAttribute("class", "input-group mb-1");
    divEl.appendChild(el);
    divEl.appendChild(buttonContainer);
  
    document.querySelector("#elements").append(divEl);
  };