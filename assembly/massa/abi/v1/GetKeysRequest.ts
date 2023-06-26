// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "..\\..\\model\\v1\\NativeAddress";

export class GetKeysRequest {
  static encode(message: GetKeysRequest, writer: Writer): void {
    const address = message.address;
    if (address !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(address, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.prefix);
  }

  static decode(reader: Reader, length: i32): GetKeysRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetKeysRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = NativeAddress.decode(reader, reader.uint32());
          break;

        case 2:
          message.prefix = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: NativeAddress | null;
  prefix: Uint8Array;

  constructor(
    address: NativeAddress | null = null,
    prefix: Uint8Array = new Uint8Array(0)
  ) {
    this.address = address;
    this.prefix = prefix;
  }
}

export function encodeGetKeysRequest(message: GetKeysRequest): Uint8Array {
  return Protobuf.encode(message, GetKeysRequest.encode);
}

export function decodeGetKeysRequest(buffer: Uint8Array): GetKeysRequest {
  return Protobuf.decode<GetKeysRequest>(buffer, GetKeysRequest.decode);
}
