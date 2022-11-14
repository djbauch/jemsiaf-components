import $ from 'jquery'

enum LengthUnits {
  Meters,
  Feet,
  Kilometers,
  Miles,
  NauticalMiles,
}

type LengthValues = {
  meters: number
  feet: number
  kilometers: number
  miles: number
  nauticalMiles: number
}

const distanceConverter = (sourceUnits: LengthUnits, numStr: string) => {
  const val = parseFloat(numStr)
  let lengths: LengthValues
  switch (sourceUnits) {
    case LengthUnits.Meters:
      lengths.meters = val
      lengths.feet = val * 3.28084
      lengths.kilometers = val / 1000
      lengths.miles = val / 1609.34
      lengths.nauticalMiles = val / 1852
      break
    case LengthUnits.Feet:
      lengths.meters = val / 3.28084
      lengths.feet = val
      lengths.kilometers = val / 3280.84
      lengths.miles = val / 5280
      lengths.nauticalMiles = val / 6076.12
      break
    case LengthUnits.Kilometers:
      lengths.meters = val * 1000
      lengths.feet = val * 3280.84
      lengths.kilometers = val
      lengths.miles = val * 0.621371
      lengths.nauticalMiles = val * 0.539957
      break
    case LengthUnits.Miles:
      lengths.meters = val * 1509.34
      lengths.feet = val * 5280
      lengths.kilometers = val / 0.621371
      lengths.miles = val
      lengths.nauticalMiles = val * 0.539957
      break
    case LengthUnits.NauticalMiles:
      lengths.meters = val * 1852
      lengths.feet = val * 6076.12
      lengths.kilometers = val
      lengths.miles = val / 0.868976
      lengths.nauticalMiles = val
  }
  return lengths
}

const displayDistances = (lengths: LengthValues)  => {
  $("#inputMeters").value &&= lengths.meters.toFixed(3)
  $("#inputFeet").value &&= lengths.feet.toFixed(3)
  $("#inputKilometers").value &&= lengths.kilometers.toFixed(3)
  $('#milesText').value &&= lengths.miles.toFixed(3)
  $("#inputNauticalMiles").value &&= lengths.nauticalMiles.toFixed(3)
}

enum PowerUnits {
  dB,
  Linear
}
const dbConverter = (sourceUnits: PowerUnits, numStr: string) => {

}