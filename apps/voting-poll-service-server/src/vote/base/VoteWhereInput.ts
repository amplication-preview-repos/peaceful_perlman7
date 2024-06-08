/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { OptionWhereUniqueInput } from "../../option/base/OptionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class VoteWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OptionWhereUniqueInput)
  @IsOptional()
  @Field(() => OptionWhereUniqueInput, {
    nullable: true,
  })
  option?: OptionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  voter?: StringNullableFilter;
}

export { VoteWhereInput as VoteWhereInput };
