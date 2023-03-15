import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 40)
  name: string;

  @IsNotEmpty({
    message: 'func é obrigatório',
  })
  func: string;
}
