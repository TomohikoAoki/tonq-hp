export default async({ app, store }) => {
    app.router.afterEach((to, from) => {
        store.dispatch('options/changeModalNav', false)
        store.dispatch('news/clearPostData')
        store.dispatch('news/clearErrorMessage')
    })
}