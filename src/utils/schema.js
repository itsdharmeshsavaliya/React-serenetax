export const getUserRegisterSchema = () => {
  return {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    taxYear: "",
    phone: "",
    alternate_phone: "",
    source: "",
    advertisements: "",
    others: "",
    timezone: "",
  }
}
export const getUserResidentialSchema = (currentYear) => {
  return {
    year: currentYear,
    data: [
      {
        year: currentYear,
        state_of_residence: "",
        from_date: "",
        to_date: "",
      },
    ],
  };
};

export const getDependentSchema = () => {
  return {
    fname: "",
    mname: "",
    lname: "",
    dob: "",
    relationship_id: "",
    irs_status_id: "",
    ssn_itin: "",
    visa_type_id: "",
    days_stayed: "",
    institution_name: "",
    institution_tax_id: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    residential_address: {},
  };
};

export const getBankDetailSchema = () => {
  return {
    account_holder_name: "",
    bank_name: "",
    us_bank_routing_number: "",
    us_bank_account_number: "",
    account_type_id: "",
  };
};

export const getFbarSchema = () => {
  return {
    ownership: "",
    bank_financial: "",
    street_address: "",
    city: "",
    state: "",
    postal_code: "",
    account_number: "",
    type_of_account: "",
    if_others: "",
    foreign_currency: "",
    income_earned: "",
    total_income_earned: "",
    maximum_value_of_account: "",
    value_of_account: "",
    name_of_joint_owner: "",
  };
};

export const referralSchema = () => {
  return {
    referral_user: "",
  };
};

export const messageSchema = () => {
  return {
    subject: "",
    message_type_id: 1,
    message: "",
  };
};

export const editProfileSchema = () => {
  return {
    name: "",
    email: "",
    phone: "",
  };
};

export const updatePasswordSchema = () => {
  return {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
};

export const getDocumentSchema = (currentYear) => {
  return {
    year: currentYear,
    document_name: "",
    document_type_id: "",
    document_comments: "",
    document_file: ""
  }
}


export const getDocumentListSchema = () => {
  return [
    {
      "document_type_id": 1,
      "document_type": "W2-wage statement"
    },
    {
      "document_type_id": 2,
      "document_type": "Personal id proof"
    },
    {
      "document_type_id": 3,
      "document_type": "1099 INT"
    },
    {
      "document_type_id": 4,
      "document_type": "1099 DIV"
    },
    {
      "document_type_id": 5,
      "document_type": "1099-G State Tax Refund"
    },
    {
      "document_type_id": 6,
      "document_type": "1099 MISC ( Self-employed business income )"
    },
    {
      "document_type_id": 7,
      "document_type": "1099-B Stock Doc"
    },
    {
      "document_type_id": 8,
      "document_type": "1099 -R"
    },
    {
      "document_type_id": 9,
      "document_type": "1099-R (401k plan)"
    },
    {
      "document_type_id": 10,
      "document_type": "5498 -SA"
    },
    {
      "document_type_id": 11,
      "document_type": "1098-T (Tuition fees)"
    },
    {
      "document_type_id": 12,
      "document_type": "1098-E (interest on your student loan)"
    },
    {
      "document_type_id": 13,
      "document_type": "1120-K1"
    },
    {
      "document_type_id": 14,
      "document_type": "1065-k1"
    },
    {
      "document_type_id": 15,
      "document_type": "1042-S"
    },
    {
      "document_type_id": 16,
      "document_type": "Residents of MA - 1099HC"
    },
    {
      "document_type_id": 17,
      "document_type": "Child/Dependent Care expenses (SSN/Tax ID required)"
    },
    {
      "document_type_id": 18,
      "document_type": "Other"
    }
  ]
}


export const getOtherIncomeSchema = (currentYear) => {
  return {
    "year": currentYear,
    "otherIncome": [
      {
        "id": "interest_dividend",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "business_income",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "sold_stocks",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "sold_espp",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "rental_income",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "earned_interest",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "draw_money_hsa",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "draw_money_ira",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "received_refund",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "received_compensation",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "income_or_losses",
        "expanded": 0,
        "comment": ""
      },
      {
        "id": "received_third_party_payment",
        "expanded": 0,
        "comment": ""
      }
    ]
  }
}

export const getRentalIncomeSchema = (currentYear) => {
  return {
    "year": currentYear,
    "building_value": "",
    "land_value": "",
    "property_address": "",
    "number_of_days_rented": "",
    "property_purchased_date": "",
    "property_holder": "",
    "income": "",
    "rents_received": "",
    "royalties_received": "",
    "expenses": "",
    "mortgage_interest": "",
    "other_interest": "",
    "insurance": "",
    "repairs": "",
    "auto_travel": "",
    "advertising": "",
    "taxes": "",
    "legal_professional_fees": "",
    "cleaning_maintenance": "",
    "commissions": "",
    "utilities": "",
    "management_fees": "",
    "supplies": "",
    "other_expenses": ""
  }
}