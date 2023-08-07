// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { StringValue } from "../../../google/protobuf/StringValue";

export class GetDsKeysRequest {
  static encode(message: GetDsKeysRequest, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.prefix);

    const address = message.address;
    if (address !== null) {
      writer.uint32(18);
      writer.fork();
      StringValue.encode(address, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetDsKeysRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetDsKeysRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.bytes();
          break;

        case 2:
          message.address = StringValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  prefix: Uint8Array;
  address: StringValue | null;

  constructor(
    prefix: Uint8Array = new Uint8Array(0),
    address: StringValue | null = null
  ) {
    this.prefix = prefix;
    this.address = address;
  }
}

export function encodeGetDsKeysRequest(message: GetDsKeysRequest): Uint8Array {
  return Protobuf.encode(message, GetDsKeysRequest.encode);
}

export function decodeGetDsKeysRequest(buffer: Uint8Array): GetDsKeysRequest {
  return Protobuf.decode<GetDsKeysRequest>(buffer, GetDsKeysRequest.decode);
}
