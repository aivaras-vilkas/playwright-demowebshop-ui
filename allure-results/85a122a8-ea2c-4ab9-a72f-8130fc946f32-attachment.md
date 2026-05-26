# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke/smoke-main.spec.ts >> Search works
- Location: tests/smoke/smoke-main.spec.ts:46:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Register" [ref=e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=e13]:
          - link "Log in" [ref=e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=e15]:
          - link "Shopping cart (0)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (0)
        - listitem [ref=e19]:
          - link "Wishlist (0)" [ref=e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=e21]: Wishlist
            - generic [ref=e22]: (0)
      - generic [ref=e24]:
        - status [ref=e25]
        - textbox [ref=e26]: Search store
        - button "Search" [ref=e27] [cursor=pointer]
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Books" [ref=e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e32]:
        - link "Computers" [ref=e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e34]:
        - link "Electronics" [ref=e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e36]:
        - link "Apparel & Shoes" [ref=e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e38]:
        - link "Digital downloads" [ref=e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e40]:
        - link "Jewelry" [ref=e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e42]:
        - link "Gift Cards" [ref=e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=e44]:
        - generic [ref=e45]:
          - strong [ref=e47]: Categories
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link "Books" [ref=e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=e52]:
              - link "Computers" [ref=e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=e54]:
              - link "Electronics" [ref=e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=e56]:
              - link "Apparel & Shoes" [ref=e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=e58]:
              - link "Digital downloads" [ref=e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=e60]:
              - link "Jewelry" [ref=e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=e62]:
              - link "Gift Cards" [ref=e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=e64]:
          - strong [ref=e66]: Manufacturers
          - list [ref=e68]:
            - listitem [ref=e69]:
              - link "Tricentis" [ref=e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=e71]:
          - strong [ref=e73]: Newsletter
          - generic [ref=e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=e77]
            - button "Subscribe" [ref=e79] [cursor=pointer]
      - generic [ref=e81]:
        - heading "Search" [level=1] [ref=e83]
        - generic [ref=e84]:
          - generic [ref=e86]:
            - generic [ref=e87]:
              - generic [ref=e88]:
                - generic [ref=e89]: "Search keyword:"
                - textbox "Search keyword:" [ref=e90]: computer
              - generic [ref=e91]:
                - checkbox "Advanced search" [ref=e92]
                - generic [ref=e93]: Advanced search
            - button "Search" [ref=e95] [cursor=pointer]
          - generic [ref=e96]:
            - generic [ref=e97]:
              - text: View as
              - combobox [ref=e98]:
                - option "Grid" [selected]
                - option "List"
            - generic [ref=e99]:
              - text: Sort by
              - combobox [ref=e100]:
                - option "Position" [selected]
                - 'option "Name: A to Z"'
                - 'option "Name: Z to A"'
                - 'option "Price: Low to High"'
                - 'option "Price: High to Low"'
                - option "Created on"
            - generic [ref=e101]:
              - text: Display
              - combobox [ref=e102]:
                - option "4"
                - option "8" [selected]
                - option "12"
              - text: per page
          - generic [ref=e104]:
            - generic [ref=e106]:
              - link "Picture of Build your own cheap computer" [ref=e108] [cursor=pointer]:
                - /url: /build-your-cheap-own-computer
                - img "Picture of Build your own cheap computer" [ref=e109]
              - generic [ref=e110]:
                - heading "Build your own cheap computer" [level=2] [ref=e111]:
                  - link "Build your own cheap computer" [ref=e112] [cursor=pointer]:
                    - /url: /build-your-cheap-own-computer
                - generic "840 review(s)" [ref=e113]
                - generic [ref=e116]:
                  - generic [ref=e118]: "800.00"
                  - button "Add to cart" [ref=e120] [cursor=pointer]
            - generic [ref=e122]:
              - link "Picture of Build your own computer" [ref=e124] [cursor=pointer]:
                - /url: /build-your-own-computer
                - img "Picture of Build your own computer" [ref=e125]
              - generic [ref=e126]:
                - heading "Build your own computer" [level=2] [ref=e127]:
                  - link "Build your own computer" [ref=e128] [cursor=pointer]:
                    - /url: /build-your-own-computer
                - generic "378 review(s)" [ref=e129]
                - generic [ref=e132]:
                  - generic [ref=e134]: "1200.00"
                  - button "Add to cart" [ref=e136] [cursor=pointer]
            - generic [ref=e138]:
              - link "Picture of Build your own expensive computer" [ref=e140] [cursor=pointer]:
                - /url: /build-your-own-expensive-computer-2
                - img "Picture of Build your own expensive computer" [ref=e141]
              - generic [ref=e142]:
                - heading "Build your own expensive computer" [level=2] [ref=e143]:
                  - link "Build your own expensive computer" [ref=e144] [cursor=pointer]:
                    - /url: /build-your-own-expensive-computer-2
                - generic "428 review(s)" [ref=e145]
                - generic [ref=e148]:
                  - generic [ref=e150]: "1800.00"
                  - button "Add to cart" [ref=e152] [cursor=pointer]
            - generic [ref=e154]:
              - link "Picture of Simple Computer" [ref=e156] [cursor=pointer]:
                - /url: /simple-computer
                - img "Picture of Simple Computer" [ref=e157]
              - generic [ref=e158]:
                - heading "Simple Computer" [level=2] [ref=e159]:
                  - link "Simple Computer" [ref=e160] [cursor=pointer]:
                    - /url: /simple-computer
                - generic "395 review(s)" [ref=e161]
                - generic [ref=e164]:
                  - generic [ref=e166]: "800.00"
                  - button "Add to cart" [ref=e168] [cursor=pointer]
  - generic [ref=e169]:
    - generic [ref=e170]:
      - generic [ref=e171]:
        - heading "Information" [level=3] [ref=e172]
        - list [ref=e173]:
          - listitem [ref=e174]:
            - link "Sitemap" [ref=e175] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e176]:
            - link "Shipping & Returns" [ref=e177] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e178]:
            - link "Privacy Notice" [ref=e179] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e180]:
            - link "Conditions of Use" [ref=e181] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e182]:
            - link "About us" [ref=e183] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e184]:
            - link "Contact us" [ref=e185] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e186]:
        - heading "Customer service" [level=3] [ref=e187]
        - list [ref=e188]:
          - listitem [ref=e189]:
            - link "Search" [ref=e190] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e191]:
            - link "News" [ref=e192] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e193]:
            - link "Blog" [ref=e194] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e195]:
            - link "Recently viewed products" [ref=e196] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e197]:
            - link "Compare products list" [ref=e198] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e199]:
            - link "New products" [ref=e200] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e201]:
        - heading "My account" [level=3] [ref=e202]
        - list [ref=e203]:
          - listitem [ref=e204]:
            - link "My account" [ref=e205] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e206]:
            - link "Orders" [ref=e207] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e208]:
            - link "Addresses" [ref=e209] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e210]:
            - link "Shopping cart" [ref=e211] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e212]:
            - link "Wishlist" [ref=e213] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e214]:
        - heading "Follow us" [level=3] [ref=e215]
        - list [ref=e216]:
          - listitem [ref=e217]:
            - link "Facebook" [ref=e218] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e219]:
            - link "Twitter" [ref=e220] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e221]:
            - link "RSS" [ref=e222] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e223]:
            - link "YouTube" [ref=e224] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e225]:
            - link "Google+" [ref=e226] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e227]:
      - text: Powered by
      - link "nopCommerce" [ref=e228] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e229]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  182 |      await this.footerInformationSitemap.click();
  183 |      await expect(this.page).toHaveURL(/\/sitemap/);
  184 |   }
  185 |   
  186 |   async footerInformationShippingReturnWorks() {
  187 |      await this.footerInformationShippingReturn.click();
  188 |      await expect(this.page).toHaveURL(/\/shipping-returns/);
  189 |   }
  190 |   
  191 |   async footerInformationPrivacyNoticeWorks() {
  192 |      await this.footerInformationPrivacyNotice.click();
  193 |      await expect(this.page).toHaveURL(/\/privacy-policy/);
  194 |   }
  195 | 
  196 |   async footerInformationConditionsOfUseWorks() {
  197 |      await this.footerInformationConditionsOfUse.click();
  198 |      await expect(this.page).toHaveURL(/\/conditions-of-use/);
  199 |   }
  200 | 
  201 |   async footerInformationAboutUsWorks() {
  202 |      await this.footerInformationAboutUs.click();
  203 |      await expect(this.page).toHaveURL(/\/about-us/);
  204 |   }
  205 | 
  206 |   async footerInformationContactUsWorks() {
  207 |      await this.footerInformationContactUs.click();
  208 |      await expect(this.page).toHaveURL(/\/contactus/);
  209 |   }
  210 | 
  211 |   async footerCustomerServiceSearchWorks() {
  212 |      await this.footerCustomerServiceSearch.click();
  213 |      await expect(this.page).toHaveURL(/\/search/);
  214 |   }
  215 | 
  216 |   async footerCustomerServiceNewsWorks() {
  217 |      await this.footerCustomerServiceNews.click();
  218 |      await expect(this.page).toHaveURL(/\/news/);
  219 |   }
  220 | 
  221 |   async footerCustomerServiceBlogWorks() {
  222 |      await this.footerCustomerServiceBlog.click();
  223 |      await expect(this.page).toHaveURL(/\/blog/);
  224 |   }
  225 | 
  226 |   async footerCustomerServiceRecentlyViewedProductsWorks() {
  227 |      await this.footerCustomerServiceRecentlyViewedProducts.click();
  228 |      await expect(this.page).toHaveURL(/\/recentlyviewedproducts/);
  229 |   }
  230 | 
  231 |   async footerCustomerServiceCompareProductsListWorks() {
  232 |      await this.footerCustomerServiceCompareProductsList.click();
  233 |      await expect(this.page).toHaveURL(/\/compareproducts/);
  234 |   }
  235 | 
  236 |   async footerCustomerServiceNewProductsWorks() {
  237 |      await this.footerCustomerServiceNewProducts.click();
  238 |      await expect(this.page).toHaveURL(/\/newproducts/);
  239 |   }
  240 | 
  241 |   async addProductFromTheGridToCart(productNumber:number) {
  242 |      await this.addToCartButton.nth(productNumber).click();
  243 |   }
  244 | 
  245 |   async goToCategory(category: string) {
  246 |     switch (category.toLowerCase()) {
  247 |       case 'books':
  248 |         await this.categoriesBooks.click();
  249 |         break;
  250 |       case 'computers':
  251 |         await this.categoriesComputers.click();
  252 |         break;
  253 |       case 'electronics':
  254 |         await this.categoriesElectronics.click();
  255 |         break;
  256 |       case 'apparel-shoes':
  257 |         await this.categoriesApparelShoes.click();
  258 |         break;
  259 |       case 'digital-downloads':
  260 |         await this.categoriesDigitalDownloads.click();
  261 |         break;
  262 |       case 'jewelry':
  263 |         await this.categoriesJewelry.click();
  264 |         break;
  265 |       case 'gift-cards':
  266 |         await this.categoriesGiftCards.click();
  267 |         break;
  268 |       default:
  269 |         throw new Error(`Category not found: ${category}`);
  270 |     }
  271 |   }
  272 | 
  273 |   async enterSearchTerm(term:string) {  
  274 |     await this.searchInputField.fill(term);
  275 |     await this.searchButton.click();
  276 |   }
  277 | 
  278 |   async searchResultsContain(term: string) {
  279 |     const results = this.searchResultsText;
  280 | 
  281 |     const count = await results.count();
> 282 |     expect(count).toBeGreaterThan(0);
      |                   ^ Error: expect(received).toBeGreaterThan(expected)
  283 | 
  284 |     const searchResultsCount = await results.count();
  285 |     for (let i = 0; i < searchResultsCount; i++) {
  286 |         await expect(results.nth(i)).toContainText(new RegExp(term, 'i'));
  287 |     }
  288 |   }
  289 | }
```