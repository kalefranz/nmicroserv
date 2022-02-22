import { Publisher } from "./base-publisher";
import { Subject } from "./subjects";
import { TicketCreatedEvent } from "./ticket-created-event";


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subject.TicketCreated;
  
}
