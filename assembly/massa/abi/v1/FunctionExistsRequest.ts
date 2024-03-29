// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class FunctionExistsRequest {
  static encode(message: FunctionExistsRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.targetScAddress);

    writer.uint32(18);
    writer.string(message.functionName);
  }

  static decode(reader: Reader, length: i32): FunctionExistsRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new FunctionExistsRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetScAddress = reader.string();
          break;

        case 2:
          message.functionName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  targetScAddress: string;
  functionName: string;

  constructor(targetScAddress: string = "", functionName: string = "") {
    this.targetScAddress = targetScAddress;
    this.functionName = functionName;
  }
}

export function encodeFunctionExistsRequest(
  message: FunctionExistsRequest
): Uint8Array {
  return Protobuf.encode(message, FunctionExistsRequest.encode);
}

export function decodeFunctionExistsRequest(
  buffer: Uint8Array
): FunctionExistsRequest {
  return Protobuf.decode<FunctionExistsRequest>(
    buffer,
    FunctionExistsRequest.decode
  );
}
