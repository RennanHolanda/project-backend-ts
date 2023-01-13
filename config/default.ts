const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

export default {
    port: 3000,
    dburi: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.gn1mbli.mongodb.net/?retryWrites=true&w=majority`,
    env: "development",
}