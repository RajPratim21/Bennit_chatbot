/**
 * Created by Benjamin on 10/13/2016.
 */

// / Client ID 637039483736-a3ofgtbjo0raelu5dr565gr4s89chg83.apps.googleusercontent.com
// Client secret 44H7OGltI1-WNexq8Pdfu6uJ
module.exports = {
  facebookAuth: {
    clientID: '199609253792685',
    clientSecret: '195d023c368b6531bafbefb101355005',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  twitterAuth: {
    consumerKey: 'sOM9aZpoEyNAXKqvEUHd2O7cN',
    consumerSecret: '6I1x0PgH41AxuqtAKcfRqYtWDMKNv0TBaaoegW3RP3o1ks7NPk',
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  googleAuth: {
    clientID: '521566560128-1n8snvd0iu9kje0b5b48bs06ncl4tdnp.apps.googleusercontent.com',
    clientSecret: 'D6f1KPPpfs9JPeUr7XWE7Jsi',
    //callbackURL: 'http://localhost:3000/auth/google/callback'
    callbackURL: '/auth/google/callback'
  }
};
