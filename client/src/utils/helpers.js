// Pluralize Item Names
export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + "s";
}

// IndexedDB
export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("shop-shop", 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore("products", { keyPath: "_id" });
      db.createObjectStore("categories", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
    };

    request.onerror = function (e) {
      console.log("There was an error");
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction(storeName, "readwrite");
      store = tx.objectStore(storeName);

      db.onerror = function (e) {
        console.log("error", e);
      };

      switch (method) {
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No valid method");
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}

// Match by ID
export function match(brickId) {
  console.log("working");
  var array = [];
  array = JSON.parse(localStorage.getItem("BrickCart")) || [];

  if (!array.filter((ID) => ID._id === brickId._id).length > 0) {
    console.log(array);
    array.push(brickId);
    localStorage.setItem("BrickCart", JSON.stringify(array));
    console.log(array);
  }
}

// Cart Quantity
export function cartQuantity(brickId) {
  const brick = ([] = JSON.parse(localStorage.getItem("BrickCart")));
  // console.log(brick)
  // console.log(brickId._id)
  for (let i = 0; i < brick.length; i++) {
    if (brick[i]._id === brickId._id) {
      brick[i].purchaseQuantity++;
      localStorage.setItem("BrickCart", JSON.stringify(brick));
    }
  }
}

// Update Cart Quantity
export function updateCartQuanity(value, brickId) {
  const brick = ([] = JSON.parse(localStorage.getItem("BrickCart")));
  for (let i = 0; i < brick.length; i++) {
    if (brick[i]._id === brickId) {
      brick[i].purchaseQuantity = parseInt(value);
      localStorage.setItem("BrickCart", JSON.stringify(brick));
    }
  }
}

// Remove From Storage
export function removeFromStorage(item) {
  const brick = ([] = JSON.parse(localStorage.getItem("BrickCart")));
  for (let i = 0; i < brick.length; i++) {
    if (brick[i]._id === item._id) {
      brick.splice(i, 1);
      console.log(i);
      console.log(brick);
      localStorage.setItem("BrickCart", JSON.stringify(brick));
    }
  }
}

