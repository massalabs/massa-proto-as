// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { StringValue } from "../../../google/protobuf/StringValue";

export class HasDataRequest {
  static encode(message: HasDataRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    const optionalAddress = message.optionalAddress;
    if (optionalAddress !== null) {
      writer.uint32(18);
      writer.fork();
      StringValue.encode(optionalAddress, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): HasDataRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HasDataRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.optionalAddress = StringValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  optionalAddress: StringValue | null;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    optionalAddress: StringValue | null = null
  ) {
    this.key = key;
    this.optionalAddress = optionalAddress;
  }
}

export function encodeHasDataRequest(message: HasDataRequest): Uint8Array {
  return Protobuf.encode(message, HasDataRequest.encode);
}

export function decodeHasDataRequest(buffer: Uint8Array): HasDataRequest {
  return Protobuf.decode<HasDataRequest>(buffer, HasDataRequest.decode);
}
