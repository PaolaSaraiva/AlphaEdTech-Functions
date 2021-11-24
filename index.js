function fillHeaderSection(animalName, species) {
    const animalNameElement = document.querySelector('#animal-name')
    const speciesElement = document.querySelector('#species')

    animalNameElement.innerHTML = animalName
    speciesElement.innerHTML = species
}

function fillInfoArea(habitat, innerImages, innerLinks, description) {
    const habitatElement = document.querySelector('#habitat')
    const imagesListElement = document.querySelector('#images')
    const linksListElement = document.querySelector('#links')
    const descriptionElement = document.querySelector('#description')

    habitatElement.innerHTML = habitat
    imagesListElement.innerHTML = innerImages
    linksListElement.innerHTML = innerLinks
    descriptionElement.innerHTML = description
}



fillHeaderSection('Axolote', 'Ambystoma mexicanum')
fillInfoArea(
    'Lago Xochimilco e o Lago Chignahuapan - Mexico',
    `
        <li>
            <img src="./assets/images/axolotl1.jpg" >
        </li>
        <li>
            <img src="./assets/images/axolotl2.jpg" >
        </li>
        <li>
            <img src="./assets/images/axolotl3.jpg" >
        </li>
    `,
    `
        <li>
            <a href="https://pt.wikipedia.org/wiki/Ambystoma_mexicanum">Wikipedia</a>
        </li>
        <li>
            <a href="https://www.petz.com.br/blog/especies/axolote/">Curiosidades</a>
        </li>
    `,
    'Uma espécie de salamandra que não se desenvolve na fase de larva, permanecendo nesse estado mesmo em adultos. É um exemplo de animal neoténico, pois conserva durante toda a vida brânquias externas, uma característica do estado larval. Os axolotes são muito usados em laboratório devido à sua capacidade de regeneração.'
)