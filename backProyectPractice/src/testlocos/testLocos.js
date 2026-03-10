function delay(){

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve("done")
    }, 2000)

  })

}

async function test(){

  console.log("A")

  const result = await delay()

  console.log("B")

}

test()

console.log("C")