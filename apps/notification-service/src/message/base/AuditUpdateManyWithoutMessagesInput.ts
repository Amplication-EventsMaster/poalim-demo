/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AuditWhereUniqueInput } from "../../audit/base/AuditWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AuditUpdateManyWithoutMessagesInput {
  @Field(() => [AuditWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuditWhereUniqueInput],
  })
  connect?: Array<AuditWhereUniqueInput>;

  @Field(() => [AuditWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuditWhereUniqueInput],
  })
  disconnect?: Array<AuditWhereUniqueInput>;

  @Field(() => [AuditWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AuditWhereUniqueInput],
  })
  set?: Array<AuditWhereUniqueInput>;
}

export { AuditUpdateManyWithoutMessagesInput as AuditUpdateManyWithoutMessagesInput };
