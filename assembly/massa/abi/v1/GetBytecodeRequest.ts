// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { StringValue } from "../../../google/protobuf/StringValue";

export class GetBytecodeRequest {
  static encode(message: GetBytecodeRequest, writer: Writer): void {
    const address = message.address;
    if (address !== null) {
      writer.uint32(10);
      writer.fork();
      StringValue.encode(address, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetBytecodeRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetBytecodeRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = StringValue.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: StringValue | null;

  constructor(address: StringValue | null = null) {
    this.address = address;
  }
}

export function encodeGetBytecodeRequest(
  message: GetBytecodeRequest
): Uint8Array {
  return Protobuf.encode(message, GetBytecodeRequest.encode);
}

export function decodeGetBytecodeRequest(
  buffer: Uint8Array
): GetBytecodeRequest {
  return Protobuf.decode<GetBytecodeRequest>(buffer, GetBytecodeRequest.decode);
}
