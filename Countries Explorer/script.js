const searchDiv=document.querySelector(".search");
const input=searchDiv.querySelector("input");
const searchBtn=searchDiv.querySelector("button");
const infoCard=document.querySelector(".info-card");

async function searchCountry(){
  const countryName=input.value.trim();

  if(!countryName){
    alert("Please enter a country name");
    return;
  }

  try{
    const response=await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

    if (!response.ok) {
      alert("Country not found");
      return;
    }

    const data=await response.json();

    if(!Array.isArray(data) || data.length === 0){
      alert("Country not found");
      return;
    }

    const country=data.find(c => c.name.common.toLowerCase() === countryName.toLowerCase());

    const currencies=Object.values(country.currencies || {} )
                           .map(c=>`${c.name} (${c.symbol})`)
                           .join(",") || "N/A";
    
    const languages=Object.values(country.languages || {})
                          .join(",") || "N/A";

    infoCard.innerHTML = `
      <img src="${country.flags.png}" class="flag"/>
      <div class="info-grid">
        <div class="info-item">
          <div class="title">Country Name</div>
          <div class="value">${country.name.common}</div>
        </div>
        <div class="info-item">
          <div class="title">Capital</div>
          <div class="value">${country.capital ? country.capital[0] : "N/A"}</div>
        </div>
        <div class="info-item">
          <div class="title">Population</div>
          <div class="value">${country.population}</div>
        </div>
        <div class="info-item">
          <div class="title">Currencies</div>
          <div class="value">${currencies}</div>
        </div>
        <div class="info-item">
          <div class="title">Region</div>
          <div class="value">${country.region}</div>
        </div>
        <div class="info-item">
          <div class="title">Languages</div>
          <div class="value">${languages}</div>
        </div>
      </div>
    `;

    infoCard.style.display="flex";
  }

  catch(error){
    alert("Country not found or error fetching data");
    console.log(error);
  }
}

searchBtn.addEventListener("click",searchCountry);