// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { Slot } from "../../model/v1/Slot";
import { SendAsyncMessageFilter } from "./SendAsyncMessageFilter";

export class SendAsyncMessageRequest {
  static encode(message: SendAsyncMessageRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.targetAddress);

    writer.uint32(18);
    writer.string(message.targetHandler);

    const validityStart = message.validityStart;
    if (validityStart !== null) {
      writer.uint32(26);
      writer.fork();
      Slot.encode(validityStart, writer);
      writer.ldelim();
    }

    const validityEnd = message.validityEnd;
    if (validityEnd !== null) {
      writer.uint32(34);
      writer.fork();
      Slot.encode(validityEnd, writer);
      writer.ldelim();
    }

    writer.uint32(40);
    writer.uint64(message.executionGas);

    writer.uint32(48);
    writer.uint64(message.rawFee);

    writer.uint32(56);
    writer.uint64(message.rawCoins);

    writer.uint32(66);
    writer.bytes(message.data);

    const filter = message.filter;
    if (filter !== null) {
      writer.uint32(74);
      writer.fork();
      SendAsyncMessageFilter.encode(filter, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SendAsyncMessageRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SendAsyncMessageRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetAddress = reader.string();
          break;

        case 2:
          message.targetHandler = reader.string();
          break;

        case 3:
          message.validityStart = Slot.decode(reader, reader.uint32());
          break;

        case 4:
          message.validityEnd = Slot.decode(reader, reader.uint32());
          break;

        case 5:
          message.executionGas = reader.uint64();
          break;

        case 6:
          message.rawFee = reader.uint64();
          break;

        case 7:
          message.rawCoins = reader.uint64();
          break;

        case 8:
          message.data = reader.bytes();
          break;

        case 9:
          message.filter = SendAsyncMessageFilter.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  targetAddress: string;
  targetHandler: string;
  validityStart: Slot | null;
  validityEnd: Slot | null;
  executionGas: u64;
  rawFee: u64;
  rawCoins: u64;
  data: Uint8Array;
  filter: SendAsyncMessageFilter | null;

  constructor(
    targetAddress: string = "",
    targetHandler: string = "",
    validityStart: Slot | null = null,
    validityEnd: Slot | null = null,
    executionGas: u64 = 0,
    rawFee: u64 = 0,
    rawCoins: u64 = 0,
    data: Uint8Array = new Uint8Array(0),
    filter: SendAsyncMessageFilter | null = null
  ) {
    this.targetAddress = targetAddress;
    this.targetHandler = targetHandler;
    this.validityStart = validityStart;
    this.validityEnd = validityEnd;
    this.executionGas = executionGas;
    this.rawFee = rawFee;
    this.rawCoins = rawCoins;
    this.data = data;
    this.filter = filter;
  }
}

export function encodeSendAsyncMessageRequest(
  message: SendAsyncMessageRequest
): Uint8Array {
  return Protobuf.encode(message, SendAsyncMessageRequest.encode);
}

export function decodeSendAsyncMessageRequest(
  buffer: Uint8Array
): SendAsyncMessageRequest {
  return Protobuf.decode<SendAsyncMessageRequest>(
    buffer,
    SendAsyncMessageRequest.decode
  );
}
