export default async function({ store, route, redirect }) {
    const user = await store.getters['getUser']
    if (route.path !== "/news/form/login") {
        if (!user) {
            return redirect("/news/form/login")
        }
    }
    if (route.path === "/news/form/login") {
        if (user) {
            console.log('たまに効かない')
            return redirect("/news/form/top")
        }
    }
}
