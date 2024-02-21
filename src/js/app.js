export default function formatNumberPhone(number) {
  let num = number.replace(/\D/g, "")
  if (num.match(/^89|79/)) {
    return `+7${num.slice(1,)}`
  } else if (num.match(/^86/)) {
    return `+${num.slice(0,)}`
  } else {
    throw Error("Номер не существует")
  }

}
