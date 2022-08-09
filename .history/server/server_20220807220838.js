const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
const path = require("path");
// Replace with .env variable later
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Payment Route
app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "", // Price ID
        quantity: "", // Quantity
      },
    ],
    mode: "payment",
    success_url: "", // Success URL
    cancel_url: "", // Cancel URL
  });
});
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});

// // Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   server.applyMiddleware({ app });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     })
//   })
//   };

//   // Call the async function to start the server
//   startApolloServer(typeDefs, resolvers);
