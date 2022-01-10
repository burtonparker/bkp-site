class ProductCategoryRow extends Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
  }
  
  class ProductRow extends Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  }
  
  class ProductTable extends Component {
    render() {
      const rows = [];
      let lastCategory = null;
      
      this.props.products.forEach((product) => {
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  
  class Main extends Component {
    render() {
      return (
        <div>
          <Header />
          <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                  <Switch>
                      <Route path='/home' component={HomePage} />
                      <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                      <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                      <Route exact path='/contactus' render={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />} />
                      <Route exact path="/aboutus" render={() => <About partners={this.props.partners} />} />
                      <Redirect to='/home' />
                  </Switch>
              </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
      );
    }
  }

  class Header extends Component {
    render() {
      return (
        <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Header</h1>
                                <h2>A portfolio site like no other.</h2>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
      )
    }
  }
  
  
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
   
  ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
  );