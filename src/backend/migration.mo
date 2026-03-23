import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type Product = {
    name : Text;
    description : Text;
    price : Nat;
    unit : Text;
    note : Text;
  };

  type ShopInfo = {
    name : Text;
    tagline : Text;
    established : Nat;
    address : Text;
    phone : Text;
    email : Text;
  };

  // Contact form submissions (visitor messages)
  type ContactSubmission = {
    name : Text;
    phone : Text;
    message : Text;
  };

  type Actor = {
    products : Map.Map<Nat, Product>;
    shopInfo : ShopInfo;
    nextProductId : Nat;
    contactSubmissions : Map.Map<Nat, ContactSubmission>;
    nextSubmissionId : Nat;
  };

  // No variables existed in the previous version, so just create new ones with default values.
  public func run(_ : {}) : Actor {
    {
      products = Map.empty<Nat, Product>();
      shopInfo = {
        name = "Pt. Shivlal Ustad";
        tagline = "Heritage Sweets & Bakery Shop. Since 1966.";
        established = 1966;
        address = "Bharat Bhagya Vidhata, RIICO, Rajasthan";
        phone = "8504003680";
        email = "info@shivlalustad.com";
      };
      nextProductId = 1;
      contactSubmissions = Map.empty<Nat, ContactSubmission>();
      nextSubmissionId = 1;
    };
  };
};
