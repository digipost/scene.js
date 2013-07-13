describe("views.js", function() {

    before(function() {
        reset();
        expose("$");
    });

    it("scene() should use jQuery for elements", function(done) {
        var el = $("<main>");
        scene({ template: "<p></p>" }, {}, function(view) {
            view.set("p", { template: "<span>1</span>" }, {}, function(subview) {
                assert.equal(view.el.html(), "<p><div><span>1</span></div></p>");
                assert.equal(view.$("span").text(), "1");
                done();
            });
        });
    });

    it("scene() should use jQuery for XHR", function(done) {
        scene({ template: "/base/spec/templates/1.html" }, {}, function(view) {
            assert.equal(view.el.html(), "<span>1</span>\n");
            done();
        });
    });

});
