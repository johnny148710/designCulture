console.log('testing');

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      results.innerHTML = `
	  	<div class="row">
			<div class="col-xs-12">		
				<h3 class="text-center">
					${data[0].name.common}
				</h3>
			</div>
		</div>
		<div class="card">
			<div class="row">
				<div class="col-xs-12 col-sm-3">		
					<div class="flag">
						<img src="${data[0].flags.svg}" class="flag-img">
					</div>
				</div>
				<div class="col-xs-12 col-sm-9">
					<div class="country-information">	
					<div class="row">
						<div class="col-xs-12 col-sm-6">
							<h4>
								Capital:
								<span>${data[0].capital[0]}</span>
							</h4>
						</div>
						<div class="col-xs-12 col-sm-6">
							<h4>
								Continents:
								<span>${data[0].continents[0]}</span>
							</h4>
						</div>

						<div class="col-xs-12 col-sm-6">
							<h4>
							Currencies:
								<span>
									${data[0].currencies[Object.keys(data[0].currencies)].name}
								</span>
							</h4>
						</div>
						<div class="col-xs-12 col-sm-6">
							<h4>Language(s):
								<span>${
									Object.values(data[0].languages)
									.toString()
									.split(",")
									.join(", ")
								}
								</span>
							</h4>
						</div>
						<div class="col-xs-12 col-sm-6">
							<h4>
								Population:
								<span>${data[0].population}</span>
							</h4>
						</div>
					</div>
						
						
						
						
					</div>
				</div>
			</div>
		</div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        results.innerHTML = `
			<h3>The input field cannot be empty</h3>
		`;
      } else {
        results.innerHTML = `
			<div class="no-results">
				<h4>Sorry we couldn't find any matches for that <strong>country</strong>.</h4>
				<p>Please try searching with another term</p>
			</div>
		`;
      }
    });
});
