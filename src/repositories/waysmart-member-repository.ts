export abstract class WaysmartMemberRepository {
  abstract create(name: string, func: string): Promise<void>;
}
