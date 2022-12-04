import FavouritesContext from "./FavouritesContext";

const withUser = (Child) => (props) => (
    <FavouritesContext.Consumer>
        {(context) => <Child {...props} {...context} />}
        {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </FavouritesContext.Consumer>
);


