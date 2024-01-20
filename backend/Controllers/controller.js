
export function homePage(req, res) {
    res.render("home.ejs", {
        topic: "Home Page",
        page: "Home"
    });
}

export function aboutPage(req, res) {
    res.render("about.ejs", {
        topic: "About Page",
        page: "About"
    });
}