export enum TransactionResponse {
  SUCCESS = "tesSUCCESS",
  PATH_DRY = "tecPATH_DRY",
  PATH_PARTIAL = 'tecPATH_PARTIAL',
}
export enum AddAssetsModalView {
  ASSETS = "assets",
  OURPICKS = "our_picks",
  CUSTOMTOKEN = "custom_token",
  REVIEW = "review",
}

export enum AccountStatus {
  IMPORT_WALLET = "import Wallet",
  CHECKING = "checking",
  REQUIRES_ACTIVATION = "requires activation",
  ACTIVATED = "activated",
}

export enum KycStep {
  What = 0,
  ContactVerification = 1,
  Information = 2,
  IDDocumentation = 3,
  Verification = 4,
}

export enum ThemeMode {
  Light = "Light",
  Dark = "Dark",
  Blue = "Blue",
}

export enum KYCStatus {
  INIT = "init",
  UnderReview = "inprogress",
  Rejected = "rejected",
  Verified = "approved",
}

export enum KYCType {
  Individual = "individual",
  Company = "company",
}

export enum OTPType {
  Email = "email",
  Phone = "phone",
}
