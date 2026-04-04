import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";


actor {
  // Contact form submissions (visitor messages)
  type ContactSubmission = {
    name : Text;
    phone : Text;
    message : Text;
  };

  // Stable persistent state
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  var nextSubmissionId : Nat = 1;

  // Public API

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

  // Get all contact form submissions
  public query ({ caller }) func getContactFormSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };
};
