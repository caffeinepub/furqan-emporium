import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Migration "migration";

// Data structures & type definitions.
(with migration = Migration.run)
actor {
  type Product = {
    name : Text;
    description : Text;
    price : Nat;
    unit : Text; // e.g. "kg", "piece"
    note : Text; // special note (e.g. for Ghewar)
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

  // Stable persistent state
  let shopInfo : ShopInfo = {
    name = "Pt. Shivlal Ustad";
    tagline = "Heritage Sweets & Bakery Shop. Since 1966.";
    established = 1966;
    address = "Bharat Bhagya Vidhata, RIICO, Rajasthan";
    phone = "8504003680";
    email = "info@shivlalustad.com";
  };

  let products = Map.empty<Nat, Product>();
  var nextProductId = 1; // Simple counter for product IDs

  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  var nextSubmissionId = 1;

  // Public API

  // Shop info
  public query ({ caller }) func getShopInfo() : async ShopInfo {
    shopInfo;
  };

  // Dishes (sweets, bakery items, snacks etc.)
  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  // Add a product
  public func addProduct(name : Text, description : Text, price : Nat, unit : Text, note : Text) : async Nat {
    let id = nextProductId;
    let product : Product = {
      name;
      description;
      price;
      unit;
      note;
    };
    products.add(id, product);
    nextProductId += 1;
    id;
  };

  // Contact form submission
  public func submitContactForm(name : Text, phone : Text, message : Text) : async Nat {
    let id = nextSubmissionId;
    let submission : ContactSubmission = {
      name;
      phone;
      message;
    };
    contactSubmissions.add(id, submission);
    nextSubmissionId += 1;
    id;
  };

  // Get all contact form submissions (for owner to review)
  public query ({ caller }) func getContactFormSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };
};
