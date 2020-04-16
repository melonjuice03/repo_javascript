const executorFunction = (resolve, reject) => {
    const iscoffemakerready = false;
    if (iscoffemakerready) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan!")

    }
}

const handlersuccess = resolvedvalue => {
    console.log(resolvedvalue);
}

const handlerrejected = rejectionreason => {
    console.log(rejectionreason);
}

const makeCoffe = new Promise(executorFunction);
makeCoffe.then(handlersuccess, handlerrejected);

//promise adalah objek yang digunakan untuk membuat suatu kode kapan kode itu dipending kapan kode berjalan saat kode asynchronus
//untuk membuat objek promise kita harus membuat menggunakan kunci new promise

//resolve untuk eksekusi bahwa promise berhasil dilakukan.
//reject untuk memberi alasan kenapa promise tidak terpenuhi