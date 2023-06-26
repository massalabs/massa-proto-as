// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAmount } from "..\\..\\model\\v1\\NativeAmount";

export class AddNativeAmountsRequest {
  static encode(message: AddNativeAmountsRequest, writer: Writer): void {
    const amount1 = message.amount1;
    if (amount1 !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAmount.encode(amount1, writer);
      writer.ldelim();
    }

    const amount2 = message.amount2;
    if (amount2 !== null) {
      writer.uint32(18);
      writer.fork();
      NativeAmount.encode(amount2, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): AddNativeAmountsRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AddNativeAmountsRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount1 = NativeAmount.decode(reader, reader.uint32());
          break;

        case 2:
          message.amount2 = NativeAmount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  amount1: NativeAmount | null;
  amount2: NativeAmount | null;

  constructor(
    amount1: NativeAmount | null = null,
    amount2: NativeAmount | null = null
  ) {
    this.amount1 = amount1;
    this.amount2 = amount2;
  }
}

export function encodeAddNativeAmountsRequest(
  message: AddNativeAmountsRequest
): Uint8Array {
  return Protobuf.encode(message, AddNativeAmountsRequest.encode);
}

export function decodeAddNativeAmountsRequest(
  buffer: Uint8Array
): AddNativeAmountsRequest {
  return Protobuf.decode<AddNativeAmountsRequest>(
    buffer,
    AddNativeAmountsRequest.decode
  );
}
