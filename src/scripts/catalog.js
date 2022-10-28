export const Catalog = (harvestedFoodArr) => {
    let htmlSeeds = ""
    for (const seeds of harvestedFoodArr) {
       htmlSeeds += `<section class="plant">${seeds.type}</section>`
    }
    return htmlSeeds
}