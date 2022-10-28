import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan)

plantSeeds(yearlyPlan)
let plants = usePlants()
console.log(plants)

const harvestingPlants = harvestPlants(plants)
// console.log(harvestingPlants)

const plantCatalog = Catalog(harvestingPlants)
console.log(plantCatalog)


document.querySelector(".container").innerHTML += plantCatalog