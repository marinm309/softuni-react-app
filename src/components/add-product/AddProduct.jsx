function AddProduct(){
    return(
        <div className="add-product-container">
            <form action method="post">
    
                <h1><strong>List a product</strong> by filling the form below</h1>
                
                <div class="form-group">
                    <label for="title">Title <span></span></label>
                    <input type="text" name="title" id="title" class="form-controll" required="required"/>
                </div>
                <div class="form-group">
                    <label for="caption">Description <span></span></label>
                    <textarea name="description" id="description" class="form-controll" required="required"/>
                </div>
                
                <div class="form-group file-area">
                    <label for="images">Images <span>Your images should be at least 400x300 wide</span></label>
                    <input type="file" name="images" id="images" required="required" multiple="multiple"/>
                    <div class="file-dummy">
                    <div class="success">Great, your images are selected. Keep on.</div>
                    <div class="default">Please upload images</div>
                    </div>
                </div>
                
                <div class="form-group">
                    <button type="submit">Upload images</button>
                </div>
            
            </form>
        </div>
    )
}

export default AddProduct