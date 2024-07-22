export function drawError(el1, el2) {
  el1.innerHTML = `
        <div class="error">
            <span class="city-name error-span">City not found</span>
        </div>                       
    `;

  el2.innerHTML = `
        <div class="error">
            <span class="city-name error-span">Please try again</span>
        </div>                       
    `;
}
