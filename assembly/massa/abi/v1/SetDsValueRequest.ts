// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.3

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { StringValue } from "../../../google/protobuf/StringValue";

export class SetDsValueRequest {
  static encode(message: SetDsValueRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.key);

    writer.uint32(18);
    writer.bytes(message.value);

    const address = message.address;
    if (address !== null) {
      writer.uint32(26);
      writer.fork();
      StringValue.encode(address, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): SetDsValueRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SetDsValueRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.address = StringValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  key: Uint8Array;
  value: Uint8Array;
  address: StringValue | null;

  constructor(
    key: Uint8Array = new Uint8Array(0),
    value: Uint8Array = new Uint8Array(0),
    address: StringValue | null = null
  ) {
    this.key = key;
    this.value = value;
    this.address = address;
  }
}

export function encodeSetDsValueRequest(
  message: SetDsValueRequest
): Uint8Array {
  return Protobuf.encode(message, SetDsValueRequest.encode);
}

export function decodeSetDsValueRequest(buffer: Uint8Array): SetDsValueRequest {
  return Protobuf.decode<SetDsValueRequest>(buffer, SetDsValueRequest.decode);
}
