export const successResponse = (res, data = {}, status = 200) =>
  res.json({
    status,
    data,
    success: true
  });

export const errorResponse = (
  res,
  errorMessage = "Invalid Request",
  status = 500,
  error = {}
) =>
  res.status(status).json({
    status,
    errorMessage,
    error,
    data: null,
    success: false
  });
