using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DatingApp.Api.Data;
using DatingApp.Api.DTOs;
using DatingApp.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace DatingApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase // api/auth
    {
        private readonly IAuthRepository _repository;
        private readonly IConfiguration _config;
        public AuthController (IAuthRepository repository, IConfiguration config)
        {
            _repository = repository;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register (/*[FromBody]*/UserForRegisterDto userForRegisterDto) { // Zde bude v paremetru DTO
            // validate request
            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            if (await _repository.UserExists(userForRegisterDto.Username))
            {
                return BadRequest("Username already exist.");
            }

            User userToCreate = new User {
                Username = userForRegisterDto.Username,
            };

            User createdUser = await _repository.Register(userToCreate, userForRegisterDto.Password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login (/* [FromBody]*/UserForLoginDto userForLoginDto) {
            var userFromRepo = await _repository.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

            if(userFromRepo == null) {
                return Unauthorized();
            }

            // Vytvoření tokenu
            var claims = new [] {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
            .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims), 
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new {
                token = tokenHandler.WriteToken(token)
            });

        }
    }
}