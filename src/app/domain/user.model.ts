export enum IdentityType{
  IdCard = 0,
  Insurance,  //医保
  Passport, //护照
  Military,  //军官证
  Other //其他

}

export interface Address{
  province:string;
  city:string;
  district:string;
  street?:string;
}

export interface Identity{
  identityNo:string;
  identityType:IdentityType;
}

export interface User {
    id?: string;
    email: string;
    name: string;
    password: string;
    avatar: string;
    projectIds: string[];
    taskIds: string[];
    address?: Address;
    dateOfBirth?: string;
    identity?: Identity;
}