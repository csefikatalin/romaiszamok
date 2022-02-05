function romai(szam) {
  let eredmeny = ''
  let tizesmaradek = szam % 10
  let tizesekszama = (szam - tizesmaradek) / 10

  for (let index = 1; index <= tizesekszama; index++) {
    eredmeny += 'X'
  }
  eredmeny += tizalattiak(tizesmaradek)

  return eredmeny
}

function tizalattiak(szam) {
  let eredmeny = ''
  if (szam == 10) {
    eredmeny = 'X'
  } else if (szam == 9) {
    eredmeny = 'IX'
  } else if (szam == 4) {
    eredmeny = 'IV'
  } else {
    let otosmaradek = szam % 5
    if (szam >= 5) {
      eredmeny = 'V'
    }
    for (let index = 1; index <= otosmaradek; index++) {
      eredmeny += 'I'
    }
  }
  return eredmeny
}
